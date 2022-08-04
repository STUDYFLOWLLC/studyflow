import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashcardArgs } from "./args/AggregateFlashcardArgs";
import { Flashcard } from "../../../models/Flashcard";
import { AggregateFlashcard } from "../../outputs/AggregateFlashcard";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Flashcard)
export class AggregateFlashcardResolver {
  @TypeGraphQL.Query(_returns => AggregateFlashcard, {
    nullable: false
  })
  async aggregateFlashcard(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashcardArgs): Promise<AggregateFlashcard> {
    return getPrismaFromContext(ctx).flashcard.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
