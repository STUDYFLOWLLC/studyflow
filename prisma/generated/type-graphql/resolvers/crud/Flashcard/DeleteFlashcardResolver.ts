import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteFlashcardArgs } from "./args/DeleteFlashcardArgs";
import { Flashcard } from "../../../models/Flashcard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flashcard)
export class DeleteFlashcardResolver {
  @TypeGraphQL.Mutation(_returns => Flashcard, {
    nullable: true
  })
  async deleteFlashcard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFlashcardArgs): Promise<Flashcard | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcard.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
