import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertFlashcardArgs } from "./args/UpsertFlashcardArgs";
import { Flashcard } from "../../../models/Flashcard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flashcard)
export class UpsertFlashcardResolver {
  @TypeGraphQL.Mutation(_returns => Flashcard, {
    nullable: false
  })
  async upsertFlashcard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFlashcardArgs): Promise<Flashcard> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcard.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
