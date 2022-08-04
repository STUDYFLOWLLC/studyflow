import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFlashcardStackArgs } from "./args/FindUniqueFlashcardStackArgs";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStack)
export class FindUniqueFlashcardStackResolver {
  @TypeGraphQL.Query(_returns => FlashcardStack, {
    nullable: true
  })
  async flashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlashcardStackArgs): Promise<FlashcardStack | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
