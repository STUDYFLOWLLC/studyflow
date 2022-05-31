import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFlashCardStackArgs } from "./args/FindUniqueFlashCardStackArgs";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCardStack)
export class FindUniqueFlashCardStackResolver {
  @TypeGraphQL.Query(_returns => FlashCardStack, {
    nullable: true
  })
  async flashCardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlashCardStackArgs): Promise<FlashCardStack | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashCardStack.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
