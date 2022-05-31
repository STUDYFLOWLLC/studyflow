import * as TypeGraphQL from "type-graphql";
import { FlashCard } from "../../../models/FlashCard";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCard)
export class FlashCardRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => FlashCardStack, {
    nullable: true
  })
  async FK_FlashCardStack(@TypeGraphQL.Root() flashCard: FlashCard, @TypeGraphQL.Ctx() ctx: any): Promise<FlashCardStack | null> {
    return getPrismaFromContext(ctx).flashCard.findUnique({
      where: {
        FlashCardID: flashCard.FlashCardID,
      },
    }).FK_FlashCardStack({});
  }
}
