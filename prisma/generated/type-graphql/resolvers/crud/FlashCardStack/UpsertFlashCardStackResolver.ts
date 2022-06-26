import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertFlashCardStackArgs } from "./args/UpsertFlashCardStackArgs";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCardStack)
export class UpsertFlashCardStackResolver {
  @TypeGraphQL.Mutation(_returns => FlashCardStack, {
    nullable: false
  })
  async upsertFlashCardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFlashCardStackArgs): Promise<FlashCardStack> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashCardStack.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
