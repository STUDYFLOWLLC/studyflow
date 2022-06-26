import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashCardArgs } from "./args/AggregateFlashCardArgs";
import { FlashCard } from "../../../models/FlashCard";
import { AggregateFlashCard } from "../../outputs/AggregateFlashCard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCard)
export class AggregateFlashCardResolver {
  @TypeGraphQL.Query(_returns => AggregateFlashCard, {
    nullable: false
  })
  async aggregateFlashCard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashCardArgs): Promise<AggregateFlashCard> {
    return getPrismaFromContext(ctx).flashCard.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
