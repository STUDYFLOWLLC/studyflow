import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyFlashcardArgs } from "./args/FindManyFlashcardArgs";
import { Flashcard } from "../../../models/Flashcard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flashcard)
export class FindManyFlashcardResolver {
  @TypeGraphQL.Query(_returns => [Flashcard], {
    nullable: false
  })
  async flashcards(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFlashcardArgs): Promise<Flashcard[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcard.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
