import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashcardStackArgs } from "./args/AggregateFlashcardStackArgs";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { AggregateFlashcardStack } from "../../outputs/AggregateFlashcardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashcardStack)
export class AggregateFlashcardStackResolver {
  @TypeGraphQL.Query(_returns => AggregateFlashcardStack, {
    nullable: false
  })
  async aggregateFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashcardStackArgs): Promise<AggregateFlashcardStack> {
    return getPrismaFromContext(ctx).flashcardStack.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
