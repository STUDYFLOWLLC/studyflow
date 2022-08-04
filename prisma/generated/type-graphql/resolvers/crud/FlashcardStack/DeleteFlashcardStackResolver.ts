import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteFlashcardStackArgs } from "./args/DeleteFlashcardStackArgs";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStack)
export class DeleteFlashcardStackResolver {
  @TypeGraphQL.Mutation(_returns => FlashcardStack, {
    nullable: true
  })
  async deleteFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFlashcardStackArgs): Promise<FlashcardStack | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
