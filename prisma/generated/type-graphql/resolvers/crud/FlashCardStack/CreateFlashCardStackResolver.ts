import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateFlashCardStackArgs } from "./args/CreateFlashCardStackArgs";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCardStack)
export class CreateFlashCardStackResolver {
  @TypeGraphQL.Mutation(_returns => FlashCardStack, {
    nullable: false
  })
  async createFlashCardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateFlashCardStackArgs): Promise<FlashCardStack> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashCardStack.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
