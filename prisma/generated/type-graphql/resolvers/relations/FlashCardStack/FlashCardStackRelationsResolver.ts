import * as TypeGraphQL from "type-graphql";
import { FlashCard } from "../../../models/FlashCard";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { Flow } from "../../../models/Flow";
import { User } from "../../../models/User";
import { FlashCardStackFlashCardsArgs } from "./args/FlashCardStackFlashCardsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FlashCardStack)
export class FlashCardStackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Flow, {
    nullable: true
  })
  async FK_Flow(@TypeGraphQL.Root() flashCardStack: FlashCardStack, @TypeGraphQL.Ctx() ctx: any): Promise<Flow | null> {
    return getPrismaFromContext(ctx).flashCardStack.findUnique({
      where: {
        FlashCardStackID: flashCardStack.FlashCardStackID,
      },
    }).FK_Flow({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async FK_User(@TypeGraphQL.Root() flashCardStack: FlashCardStack, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).flashCardStack.findUnique({
      where: {
        FlashCardStackID: flashCardStack.FlashCardStackID,
      },
    }).FK_User({});
  }

  @TypeGraphQL.FieldResolver(_type => [FlashCard], {
    nullable: false
  })
  async FlashCards(@TypeGraphQL.Root() flashCardStack: FlashCardStack, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FlashCardStackFlashCardsArgs): Promise<FlashCard[]> {
    return getPrismaFromContext(ctx).flashCardStack.findUnique({
      where: {
        FlashCardStackID: flashCardStack.FlashCardStackID,
      },
    }).FlashCards(args);
  }
}
