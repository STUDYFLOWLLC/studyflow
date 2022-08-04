import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertFlashcardStackArgs } from "./args/UpsertFlashcardStackArgs";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStack)
export class UpsertFlashcardStackResolver {
  @TypeGraphQL.Mutation(_returns => FlashcardStack, {
    nullable: false
  })
  async upsertFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFlashcardStackArgs): Promise<FlashcardStack> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
